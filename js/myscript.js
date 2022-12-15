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
            ],
            arrayForActiveIndex: [],
        }
    },
    methods: {
        /*  this function permit to change clicked contact visible data in true
            and add the entire element to a new array (arrayForActiveIndex),
            in this way I will be able to call that element for the contanct-info
            and for the chat's messages.
        */
        getElementActive: function(index){
            this.arrayForActiveIndex.splice(0, 1);
            for (i=0; i<this.contacts.length; i++){
                if (this.contacts[i].visible === true){
                    this.contacts[i].visible = !this.contacts[i].visible;
                }
            }
            this.contacts[index].visible = !this.contacts[index].visible;
            this.arrayForActiveIndex.push(this.contacts[index]);
            console.log(this.arrayForActiveIndex);
            console.log(this.arrayForActiveIndex[0].messages[0].message);
        },
    },
}).mount('#app')


