import os
from dotenv import load_dotenv

load_dotenv()

RABBITMQ_URL = os.getenv("RABBITMQ_URL")
RABBITMQ_QUEUE = os.getenv("RABBITMQ_QUEUE")
BOT_TOKEN = os.getenv("BOT_TOKEN")
CHAT_ID = os.getenv("CHAT_ID")