const { createApp } = Vue;

createApp({
    data()  {
        return {
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: '_5',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novit???',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: '_7',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che ?? il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: '_8',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho gi?? mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],
            newMessage: '',
            searchContact: '',
            activeIndex: 0,
            chatWidth: 0,
            local: luxon.DateTime.now().day + '/' + luxon.DateTime.now().month + '/' + luxon.DateTime.now().year + ' ' +
            luxon.DateTime.now().hour + ':' + luxon.DateTime.now().minute + ':' + luxon.DateTime.now().second,
            day: '',
            dropDownMenuIndex: null,
        }
    },
    methods: {
        getElementActive: function(index){
            this.activeIndex = index;
        },
        searchTheContact: function(){
            for (i=0; i<this.contacts.length; i++){
                if (this.contacts[i].visible === true){
                    this.contacts[i].visible = !this.contacts[i].visible;
                }
                if (this.contacts[i].name.toLowerCase().includes(this.searchContact.toLowerCase()) === true){
                    this.contacts[i].visible = true;
                }
            }
        },
        getDayFormat: function(element){
            if (this.contacts[this.activeIndex].messages[this.contacts[this.activeIndex].messages.length - 1].status == 'received'){
                this.day = element.toString().split(' ')[0];
            } else {
                this.day = this.contacts[this.activeIndex].messages[this.contacts[this.activeIndex].messages.length - 2].date.toString().split(' ')[0];
            }
            return this.day
        },
        getTimeFormat: function(element){
            let time = element.toString().split(' ')[1].split(':');
            time = time[0] + ':' + time[1];
            return time
        },
        receivedNewMessage: function(){
            this.contacts[this.activeIndex].messages.push({
            date: this.local,
            message: 'OK!',
            status: 'received' });
        },
        sendNewMessage: function(){
            let chat = document.querySelector('.chat');
            chat.scrollTo(0, chat.scrollHeight*2);
            this.contacts[this.activeIndex].messages.push({
            date: this.local,
            message: this.newMessage,
            status: 'sent' });
            setTimeout(this.receivedNewMessage, 1000);
            this.newMessage = '';
        },
        getDropDownMenu: function(index){
            if(this.dropDownMenuIndex !== index || this.dropDownMenuIndex !== null){
                this.dropDownMenuIndex = index;
            } else {
                this.dropDownMenuIndex = null;
            }
        },
        deleteMessage: function (index){
            this.contacts[this.activeIndex].messages.splice(index, 1)
            this.dropDownMenuIndex = null;
        }
    },
    created(){
        this.getElementActive(this.activeIndex);
    }
}).mount('#app')