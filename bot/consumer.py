import asyncio
import aio_pika
import json
import logging

from config import RABBITMQ_URL, RABBITMQ_QUEUE
from bot import send_message


async def format_message(body: bytes) -> str:
    try:
        data = json.loads(body)

        name = data.get("name", "Клиент не указал")
        contact = data.get("contact")
        message = data.get("message")
        budget = data.get("budget")

        html_text = f"""
        <b>Имя</b>: {name}
        <b>Контакт</b>: {contact}
        <b>Описание проекта</b>: {message}
        <b>Бюджет</b>: {budget}
            """

        return html_text
    except Exception as e:
        return f"Ошибка форматирования: {e}"

async def queue_listener():
    connection = await aio_pika.connect_robust(RABBITMQ_URL)
    async with connection:
        channel = await connection.channel()
        queue = await channel.declare_queue(RABBITMQ_QUEUE, durable=True)

        async with queue.iterator() as queue_i:
            async for message in queue_i:
                async with message.process():
                    text = await format_message(message.body)
                    await send_message(text)

if __name__ == "__main__":
    logging.basicConfig(level=logging.INFO)
    try:
        asyncio.run(queue_listener())
    except KeyboardInterrupt:
        print("consumer exit")