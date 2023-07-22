import axios from 'axios';
import queryString from 'query-string';
import { ResearchPaperInterface, ResearchPaperGetQueryInterface } from 'interfaces/research-paper';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getResearchPapers = async (
  query?: ResearchPaperGetQueryInterface,
): Promise<PaginatedInterface<ResearchPaperInterface>> => {
  const response = await axios.get('/api/research-papers', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createResearchPaper = async (researchPaper: ResearchPaperInterface) => {
  const response = await axios.post('/api/research-papers', researchPaper);
  return response.data;
};

export const updateResearchPaperById = async (id: string, researchPaper: ResearchPaperInterface) => {
  const response = await axios.put(`/api/research-papers/${id}`, researchPaper);
  return response.data;
};

export const getResearchPaperById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/research-papers/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteResearchPaperById = async (id: string) => {
  const response = await axios.delete(`/api/research-papers/${id}`);
  return response.data;
};
