import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ResearchPaperInterface {
  id?: string;
  title: string;
  content: string;
  author_id?: string;
  editor_id?: string;
  reviewer_id?: string;
  created_at?: any;
  updated_at?: any;

  user_research_paper_author_idTouser?: UserInterface;
  user_research_paper_editor_idTouser?: UserInterface;
  user_research_paper_reviewer_idTouser?: UserInterface;
  _count?: {};
}

export interface ResearchPaperGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  content?: string;
  author_id?: string;
  editor_id?: string;
  reviewer_id?: string;
}
