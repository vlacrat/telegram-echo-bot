const TOKEN = '1335039348:AAFFLzC9YM0salbAITFbOhtJTOKWqTu-dUU'
const tf = require('telegraf')

const bot = new tf(TOKEN)

bot.start(ctx => {
  ctx.reply(
    'Hello it\'s echo bot!!!'
  )
})
bot.launch().then(res => {
  console.log('Started...')
}).catch(err => {
  console.log('Error...')
})