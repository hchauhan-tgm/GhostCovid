<template>
	<div class="chat-window">
		<div class="row" style="width:100%;">
			<div class="col s4">
				<form class="msginput-container" v-on:submit="sendMessage">
					<textarea  id="icon_prefix2" type="text" class="validate msginput" v-model="msg"></textarea>
					<button class="sendbutton" v-on:click="sendMessage" v-bind:disabled="!msg">Veröffentlichen</button>
				</form>
			</div>
			<div class="col s8">
				<div class="messages">
					<div class="message" v-for="message in messages" v-bind:key="message._id">
						<div class="msgusername">{{message.username}}</div>
						<div class="msgdate">{{message.aktdate}}</div><br>
						<div class="message-text">{{message.msg}}</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'chatroom',
	props: ['messages'],
	data: function () {
		return {
			msg: ""
		}
	},
	methods: {
		sendMessage: function () {
			if (!this.msg) {
				alert("Please enter a message");
				return;
			}
			this.$emit('sendMessage', this.msg);
			this.msg = "";
		}
	}
}
</script>