import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ConsultationsOrderByWithRelationInput } from "../../../inputs/ConsultationsOrderByWithRelationInput";
import { ConsultationsWhereInput } from "../../../inputs/ConsultationsWhereInput";
import { ConsultationsWhereUniqueInput } from "../../../inputs/ConsultationsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateConsultationsArgs {
  @TypeGraphQL.Field(_type => ConsultationsWhereInput, {
    nullable: true
  })
  where?: ConsultationsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ConsultationsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ConsultationsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ConsultationsWhereUniqueInput, {
    nullable: true
  })
  cursor?: ConsultationsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
