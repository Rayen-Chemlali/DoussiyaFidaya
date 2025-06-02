import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Lab_attachmentsOrderByWithRelationInput } from "../../../inputs/Lab_attachmentsOrderByWithRelationInput";
import { Lab_attachmentsWhereInput } from "../../../inputs/Lab_attachmentsWhereInput";
import { Lab_attachmentsWhereUniqueInput } from "../../../inputs/Lab_attachmentsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateLab_attachmentsArgs {
  @TypeGraphQL.Field(_type => Lab_attachmentsWhereInput, {
    nullable: true
  })
  where?: Lab_attachmentsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Lab_attachmentsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: Lab_attachmentsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => Lab_attachmentsWhereUniqueInput, {
    nullable: true
  })
  cursor?: Lab_attachmentsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
