import prisma from '../helper/prisma.js'

export const registerOrder = async (req, res) => {
  const { customer_id, user_id, car_id, request_id } = req.body
  const { id } = req.params
  const order = await prisma.order.create({
    data: {
      customerId: customer_id,
      userId: user_id,
      carId: car_id,
      requestId: request_id,
    },
    include: {
      request: true,
    },
  })

  const request = await prisma.request.findFirst({
    where: {
      id: request_id,
    },
  })
  if (request) {
    const updateRequest = await prisma.request.update({
      where: {
        id: Number(request_id),
      },
      data: {
        pending: false,
      },
    })
    // req.json( updateRequest)
  }

  res.json({ order })
}

export const updateRequestOrder = async (req, res) => {
  const { id } = req.params
  const user = await prisma.request.findUnique({
    where: {
      id: Number(id),
    },
  })
  if (!user) {
    res.status(404).json({ msg: `Request id of ${id} is not Found` })
  } else {
    await prisma.order.update({})
  }
}

export const getOrder = async (req, res) => {
  const order = await prisma.request.findMany({
    where: { pending: false },
  })

  res.status(200).json({
    count: order.length,
    order,
  })
}
