import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PrescriptionsOrderByWithRelationInput } from "../../../inputs/PrescriptionsOrderByWithRelationInput";
import { PrescriptionsWhereInput } from "../../../inputs/PrescriptionsWhereInput";
import { PrescriptionsWhereUniqueInput } from "../../../inputs/PrescriptionsWhereUniqueInput";
import { PrescriptionsScalarFieldEnum } from "../../../../enums/PrescriptionsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class DoctorsPrescriptionsArgs {
  @TypeGraphQL.Field(_type => PrescriptionsWhereInput, {
    nullable: true
  })
  where?: PrescriptionsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PrescriptionsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PrescriptionsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PrescriptionsWhereUniqueInput, {
    nullable: true
  })
  cursor?: PrescriptionsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [PrescriptionsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "date" | "instructions" | "is_signed" | "section" | "status" | "updated_at" | "doctor_id" | "patient_id"> | undefined;
}
