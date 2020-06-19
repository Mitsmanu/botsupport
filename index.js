const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
    console.log(`bot is ready as ${client.user.tag}`)
    client.user.setStatus("online")

});

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log');
    if (!channel) return;
    channel.send(`Welcome to the server, ${member}`);
  }); 

client.on(`message`, message => {
    // Receiving the message
    console.log(message.content);
    if (message.content === "¡Hola") {
        message.reply("¡Hola! Bienvenido al Servidor, es un gusto tenerte aqui, por favor lee las #reglas-beta1 y disfruta tu estancia.");
    }


    if (message.content === "-next") {
        message.channel.send(`Hola ${message.author}, recerda ir al canal de #plenas , donde podras ejectar tods los comandos de música.`)
    }

    if (message.content === "Puedo ser admin?") {
        message.channel.send(`${message.author} No, los roles son negociables, pedirlos repetidamente es motivo de Ban permanente, saludos.`)
    }

    if (message.content === "Hay algún administrador?") {
        message.channel.send(`Hola ${message.author}, soy el Bot de soporte del servidor, para hablar con un administrador del servidor por favor envíame un DM y te concederé un ticket para reportes, asi podrás hablar directamente con un Admin.`)
    }
    if (message.content === "/Apoyo") {
      message.channel.send('Hola, puedes apoyar el proyecto compartiendo el el bot coon tus amigos y dando follow https://twitter.com/jdeveloper_s')
    }

    if (message.content === "/Apt") {
        message.channel.send(`Hola ${message.author},Iniciando apagado de emergencia.`)
    }

    if (message.content === "Maricon") {
        message.channel.send(`${message.author}, Si vuelves a insultar a alguien del chat, serás baneado permanentemente.`)
    }

    if (message.content === "Puto") {
        message.channel.send(`Hola ${message.author}, Si vuelves a insultar a alguien seras baneado.`)
    }

    if (message.content === "puto") {
    message.channel.send(`Hola ${message.author}, No estan permitidos los insultos en este servidor, si lo vuelves a hacer serás baneado.`)}

    if (message.content ==="puta") {
        message.channel.send(`Hola ${message.author}, Los insultos están prohibidos en este servidor, evita ser baneado`)
    }

    if (message.content === "/Reglas") {
        message.channel.send(`Hola, bienvenido al servidor, estas son las reglas:

        1. Está prohibido insultar a otros mieembros del seervidor.
        2. El uso de multicuentas es motivo de baneo, ten mucho cuidado. 
        3. Exigir roles es motivo de baneo permanente. 
        4. Arrovar a los administradores sin motivo alguno es raon para muted. 
        5. El mal uso del Bot de soporte es sanconado con un muted o ban, dependiendo de la situación. 
        6. Está prohibido el envio o utilización de archivos de la categoria NFSW en cualquier canal que no mantenga la etiqueta. 
        7. No hacer spam.`)
    };

    if (message.content.includes(`/Creditos`)) {
        message.channel.send(`Hola ${message.author}, El desarrollo de este Bot fue posible gracias a: https://twitter.com/jdeveloper_s`)
    }

    if (message.content.includes(`/creditos`)) {
        message.channel.send(`Hola ${message.author}, El desarrollo de este Bot fue posible gracias a: https://twitter.com/jdeveloper_s`)
    }

    if (message.content.includes(`/API`)) {
        message.channel.send(`Hola ${message.author}, Discord ha certificado mi instalacion en este servidor`)
    }

    if (message.content.includes(`/Help`)) {
        message.channel.send(`Hola ${message.author}, Envíame un DM con tu duda o reporte.`)
    }

    if (message.content.includes(`/help`)) {
        message.channel.send(`Hola ${message.author}, Envíame un DM con tu duda o reporte.`)
    }

    if (message.content.includes(`/Gif`)) {
        message.channel.send(`Hola ${message.author}, mi desarrollador me informa que para eso necesito una extención especifica, aun no la tengo pero esperro que pronto pueda resolver tu petición.`)
    }

    if (message.content.includes(`/gif`)) {
        message.channel.send(`Hola ${message.author}, mi desarrollador me informa que para eso necesito una extención especifica, aun no la tengo pero espero que pronto pueda resolver tu petición.`)
    }

    if(message.content)


    
    
    
        if (!message.guild) return;
      
        if (message.content.startsWith('!kick')) {
          const user = message.mentions.users.first();
          // If we have a user mentioned
          if (user) {
      
            const member = message.guild.member(user);
            if (member) {
              member
                .kick('Optional reason that will display in the audit logs')
                .then(() => {
                  message.reply(`Successfully kicked ${user.tag}`);
                })
                .catch(err => {
                  message.reply('I was unable to kick the member');
                  console.error(err);
                });
            } else {
            
              message.reply("That user isn't in this guild!");
            }
      
          } else {
            message.reply("You didn't mention the user to kick!");
          }
        }
      });



   


client.login("NzExMjgwNDQ3MjAzODM1OTI3.Xu1Ang._A8NanlkPsPMJRpaM5Y1qk2of_w"); 