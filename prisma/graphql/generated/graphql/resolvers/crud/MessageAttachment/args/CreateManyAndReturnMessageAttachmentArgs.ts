import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MessageAttachmentCreateManyInput } from "../../../inputs/MessageAttachmentCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnMessageAttachmentArgs {
  @TypeGraphQL.Field(_type => [MessageAttachmentCreateManyInput], {
    nullable: false
  })
  data!: MessageAttachmentCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
