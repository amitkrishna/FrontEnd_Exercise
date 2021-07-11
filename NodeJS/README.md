Promises & Async/Await

'''
function serveCustomers(customers)
{
    return customer.placeOrder(menu)
    .then(order => cook.prepareFood(order))
    .then(food => customer.eatAndPay(food))
}

'''

Event Emitter

'''
emitter.emit()

emitter.on()

'''

Stream
1) Readable Stream
2) Writable Stream
3) Read Write Stream

- Readable Stream:-
Events - readable , data and error
Methods - read, pause, resume , destroy
Properties - readable, readableLength


- Writable Streams:-
Events - 
Methods -
Properties - 

Piping Streams:-

fs.ReadStream - fs.WriteStream ,  http.ClientRequest , http.IncomingMessaging, http.ServerRequesting , zlib.createZip

'''
const http = require('http')
const fs = require('fs')
const path = require('path')
const zlib = require('zlib')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Encoding', 'gzip')
  fs.createReadStream(path.join(__dirname, 'lorem.txt'))
    .pipe(zlib.createGzip())
    .pipe(res)
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
})
'''

Modularity in Node:->

cooks.js
'''
const secondsToWait = 1

const prepareFood = async (order) => {
    // It takes some time to prepare the order
    return new Promise(resolve => 
        setTimeout(resolve, Math.ceil(Math.random()*secondsToWait)*1000)
    )
}

module.exports = { prepareFood }
'''

customer.js
'''
const secondsToWait = 10
var count = 0

class Customer {
    constructor() {
        this.id = ++count
        this.start = Date.now()
    }
    waitTime() {
        return Math.round((Date.now() - this.start)/1000)
    }
    placeOrder(menu) {
        // The customer spends some time thinking
        return new Promise(resolve => 
            setTimeout(resolve, Math.ceil(Math.random()*secondsToWait)*1000)
        )
    }
    eatAndPay(food, done) {
        // The customer takes some time to eat and pay
        return new Promise(resolve =>
            setTimeout(resolve, Math.ceil(Math.random()*secondsToWait)*1000)
        )
    }
}

module.exports = Customer

'''


waitress.js

'''
const cook = require('./cook')
const Customer = require('./customer')
const menu = ['fried chicken', 'hamburger', 'club sandwich']

const customerCount = 10
const startTime = Date.now()

const serveCustomer = (customer) => {
  console.log(`Now serving customer ${customer.id}, who waited ${customer.waitTime()} seconds`)
  return customer.placeOrder(menu)
    .then(order => {
      console.log(`Preparing food for customer ${customer.id}`)
      return cook.prepareFood(order)
    })
    .then(food => {
      console.log(`Customer ${customer.id} is eating and paying`)
      return customer.eatAndPay(food)
    })
}

const serveAllCustomers = customers => {
  let currentCustomers = 0
  Promise.all(customers.map(customer => {
    currentCustomers++
    return serveCustomer(customer).then(() => {
      console.log(`Customer ${customer.id} has finished (${--currentCustomers} remaining)`)
    })
  })).then(() => {
    const totalToTimeServe = Math.round((Date.now() - startTime) / 1000)
    console.log(`Served ${customerCount} customers over ${totalToTimeServe} seconds`)
  })
}

serveAllCustomers(Array.from(Array(customerCount), () => new Customer()))

'''