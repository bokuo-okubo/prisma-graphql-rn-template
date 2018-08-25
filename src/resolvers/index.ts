import { extractFragmentReplacements } from 'prisma-binding';
import * as Prisma from '../generated/prisma';
import { Context } from '../utils';
import Mutation from './Mutation';
import Query from './Query';

export const resolvers = {
  Query,
  Mutation,
};

export const fragmentReplacements = extractFragmentReplacements(resolvers);
