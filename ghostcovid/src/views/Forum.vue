<template>
    <div class="forum">
      <Header />
      <Titel msg="Forum" />

		<!--https://chrome.google.com/webstore/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc-->
		<div class="forummsg">
			<div class="header">
				<p class="anzeige">Username: {{ username }} | Online: {{ users.length }} | {{ aktdate }}</p>
			</div>
			<ChatRoom v-bind:messages="messages" v-on:sendMessage="this.sendMessage" />
		</div>

      <Footer />
    </div>
  
</template>

<script>
import io from 'socket.io-client';
import ChatRoom from '../components/ChatRoom';

export default {
  name: 'Forum',
  components: {
     ChatRoom
  },
  data: function () {
		return {
			username: "",
			socket: io("http://localhost:3000"),
			messages: [],
			users: [],
			aktdate: (new Date()).toLocaleString()
		}
	},
  methods: {
		joinServer: function () {
			this.socket.on('loggedIn', data => {
				this.messages = data.messages;
				this.users = data.users;
				this.socket.emit('newuser', this.username);
			});
			this.listen();
		},
		listen: function () {
			this.socket.on('userOnline', user => {
				this.users.push(user);
			});
			this.socket.on('userLeft', user => {
				this.users.splice(this.users.indexOf(user), 1);
			});
			this.socket.on('msg', message => {
				this.messages.push(message);
			});
		},
		sendMessage: function (message) {
			this.socket.emit('msg', message);
		}
	},
	mounted: function () {
		this.username = prompt("What is your username?", "Anonymous");
		if (!this.username) {
			this.username = "Anonymous";
		}
		this.joinServer();
	}
};
</script>
