const TOKEN = '1335039348:AAFFLzC9YM0salbAITFbOhtJTOKWqTu-dUU'
const tf = require('telegraf')

const bot = new tf(TOKEN)

bot.start(ctx => {
  ctx.reply(
    'Hello it\'s echo bot!!!'
  )
})

bot.help(ctx => {
  ctx.reply(`
    Send any message and i will copy it
  `)
})

bot.on('message', (ctx) => {
  ctx.telegram.sendCopy(ctx.chat.id, ctx.message)
})

bot.launch().then(res => {
  console.log('Started...')
}).catch(err => {
  console.log('Error...')
})