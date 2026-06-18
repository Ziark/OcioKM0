import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ cors: true })
export class RealtimeGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  private server: Server;

  handleConnection(client: Socket) {
    void client;
  }

  handleDisconnect(client: Socket) {
    void client;
  }

  @SubscribeMessage('join_event')
  handleJoinEvent(client: Socket, eventId: string) {
    void client.join(`event_${eventId}`);
    return { event: 'joined', data: eventId };
  }

  @SubscribeMessage('leave_event')
  handleLeaveEvent(client: Socket, eventId: string) {
    void client.leave(`event_${eventId}`);
  }

  broadcastAlert(eventId: string, payload: unknown) {
    this.server?.to(`event_${eventId}`).emit('alert', payload);
  }
}
