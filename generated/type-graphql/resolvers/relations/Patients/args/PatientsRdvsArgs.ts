import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RdvsOrderByWithRelationInput } from "../../../inputs/RdvsOrderByWithRelationInput";
import { RdvsWhereInput } from "../../../inputs/RdvsWhereInput";
import { RdvsWhereUniqueInput } from "../../../inputs/RdvsWhereUniqueInput";
import { RdvsScalarFieldEnum } from "../../../../enums/RdvsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class PatientsRdvsArgs {
  @TypeGraphQL.Field(_type => RdvsWhereInput, {
    nullable: true
  })
  where?: RdvsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [RdvsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: RdvsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => RdvsWhereUniqueInput, {
    nullable: true
  })
  cursor?: RdvsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [RdvsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "date" | "time" | "patient_id" | "doctor_id" | "consultation_id" | "rdv_request_id"> | undefined;
}
