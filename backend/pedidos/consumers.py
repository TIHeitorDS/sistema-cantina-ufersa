import json
from channels.generic.websocket import AsyncWebsocketConsumer

class PedidosConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        print("Tentando conectar...")
        self.room_name = "pedidos_cantina"
        self.room_group_name = f"group_{self.room_name}"

        await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name
        )

        await self.accept()

        await self.send(text_data=json.dumps({
            'tipo': 'CONECTADO',
            'mensagem': 'WebSocket conectado com sucesso!'
        }))
        print("Conectado com sucesso.")

    async def disconnect(self, close_code):
        await self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name
        )

    async def notificar_pedido(self, event):
        await self.send(text_data=json.dumps({
            'tipo': 'NOVO_PEDIDO',
            'pedido': event['pedido']
        }))

    async def notificar_estado(self, event):
        await self.send(text_data=json.dumps({
            'tipo': 'ATUALIZAR_ESTADO',
            'pedido': event['pedido']
        }))