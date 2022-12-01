import prisma from "../helper/prisma.js";

export const getCounts = async (req, res) => {
  let stats = {
    pending: 0,
    requests: 0,
  };
  const pendingRequestCount = await prisma.request.count({
    where: {
      pending: true,
    },
  });

  stats.pending = pendingRequestCount;
  res.json(stats);
};
