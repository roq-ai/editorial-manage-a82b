import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { researchPaperValidationSchema } from 'validationSchema/research-papers';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.research_paper
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getResearchPaperById();
    case 'PUT':
      return updateResearchPaperById();
    case 'DELETE':
      return deleteResearchPaperById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getResearchPaperById() {
    const data = await prisma.research_paper.findFirst(convertQueryToPrismaUtil(req.query, 'research_paper'));
    return res.status(200).json(data);
  }

  async function updateResearchPaperById() {
    await researchPaperValidationSchema.validate(req.body);
    const data = await prisma.research_paper.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deleteResearchPaperById() {
    const data = await prisma.research_paper.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
