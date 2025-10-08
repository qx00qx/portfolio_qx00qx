import asyncio
import logging

from bot import dp, bot
from consumer import queue_listener
from config import CHAT_ID


async def main():
    await asyncio.gather(
        dp.start_polling(bot),
        queue_listener()
    )

if __name__ == "__main__":
   logging.basicConfig(level=logging.INFO)
   try:
        asyncio.run(main())
   except KeyboardInterrupt:
       print('bot exit')