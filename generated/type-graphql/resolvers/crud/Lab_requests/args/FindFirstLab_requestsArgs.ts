import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Lab_requestsOrderByWithRelationInput } from "../../../inputs/Lab_requestsOrderByWithRelationInput";
import { Lab_requestsWhereInput } from "../../../inputs/Lab_requestsWhereInput";
import { Lab_requestsWhereUniqueInput } from "../../../inputs/Lab_requestsWhereUniqueInput";
import { Lab_requestsScalarFieldEnum } from "../../../../enums/Lab_requestsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstLab_requestsArgs {
  @TypeGraphQL.Field(_type => Lab_requestsWhereInput, {
    nullable: true
  })
  where?: Lab_requestsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Lab_requestsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: Lab_requestsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => Lab_requestsWhereUniqueInput, {
    nullable: true
  })
  cursor?: Lab_requestsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Lab_requestsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "type" | "priority" | "description" | "doctor_id" | "patient_id"> | undefined;
}
