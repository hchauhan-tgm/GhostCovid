<template>
	<div class="chat-window">
		<form class="msginput-container" v-on:submit="sendMessage">
			<div class="row" style="width:100%; text-align:left; margin-left: -10px">
				<div class="col s10">
					<textarea  id="icon_prefix2" type="text" class="validate msginput" v-model="msg"></textarea>
				</div>
				<div class="col s2">
					<button class="sendbutton" v-on:click="sendMessage" v-bind:disabled="!msg">Veröffentlichen</button>
				</div>
			</div>
		</form>
		<div class="messages">
			<div class="message" v-for="message in messages" v-bind:key="message._id">
				<div class="msgusername">{{message.username}}</div><br>
				<div class="message-text">{{message.msg}}</div>
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