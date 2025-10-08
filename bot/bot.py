from aiogram import Bot, Dispatcher
from aiogram.filters import Command
from aiogram.types import Message
from aiogram.enums.parse_mode import ParseMode

from config import BOT_TOKEN, CHAT_ID
import logging

bot = Bot(token=BOT_TOKEN)
dp = Dispatcher()

async def send_message(text: str):
    try:
        await bot.send_message(chat_id=CHAT_ID, text=text, parse_mode=ParseMode.HTML)

    except Exception as e:
        logging.error(f"Ошибка при отправке: {e}")