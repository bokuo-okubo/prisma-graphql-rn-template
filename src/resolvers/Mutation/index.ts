import { Context } from '../../utils'

export interface CreateDraft {
  title?: string,
  text?: string
}

export interface WithId {
  id: string
}

export const Mutation = {
   createDraft(parent, args: CreateDraft, context: Context, info) {
     const { title, text } = args;
      return context.db.mutation.createPost(
        { data: { title, text } },
        info,
      )
    },
    deletePost(parent, args: WithId, context: Context, info) {
      const { id } = args
      return context.db.mutation.deletePost({ where: { id } }, info)
    },
    publish(parent, args: WithId, context: Context, info) {
      const { id } = args
      return context.db.mutation.updatePost(
        {
          where: { id },
          data: { isPublished: true },
        },
        info,
      )
    },
};

export default Mutation;
