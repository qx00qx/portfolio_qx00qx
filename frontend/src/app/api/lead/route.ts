import { NextRequest, NextResponse } from "next/server";
import amqp from 'amqplib';

export async function POST(req: NextRequest) {
    try {
        const data = await req.json();
        console.log(data)

        const connection = await amqp.connect(process.env.RABBITMQ_URL!)
        const channel = await connection.createChannel();
        const queue = process.env.RABBITMQ_QUEUE!;

        await channel.assertQueue(queue, { durable: true})
        channel.sendToQueue(queue, Buffer.from(JSON.stringify(data)))

        await channel.close();
        await connection.close();

        return NextResponse.json({ success: true});

    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Failed to send lead in RabbitMQ [api/lead]'}, {status: 500})
    }
}