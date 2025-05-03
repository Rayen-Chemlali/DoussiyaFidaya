import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorsUpdateeducationInput } from "../inputs/DoctorsUpdateeducationInput";
import { DoctorsUpdateexperienceInput } from "../inputs/DoctorsUpdateexperienceInput";
import { DoctorsUpdatelanguagesInput } from "../inputs/DoctorsUpdatelanguagesInput";
import { Enumdoctors_specialty_enumFieldUpdateOperationsInput } from "../inputs/Enumdoctors_specialty_enumFieldUpdateOperationsInput";
import { Enumdoctors_type_enumFieldUpdateOperationsInput } from "../inputs/Enumdoctors_type_enumFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("DoctorsUpdateManyMutationInput", {})
export class DoctorsUpdateManyMutationInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => Enumdoctors_type_enumFieldUpdateOperationsInput, {
    nullable: true
  })
  type?: Enumdoctors_type_enumFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  bio?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsUpdateeducationInput, {
    nullable: true
  })
  education?: DoctorsUpdateeducationInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsUpdateexperienceInput, {
    nullable: true
  })
  experience?: DoctorsUpdateexperienceInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  first_name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsUpdatelanguagesInput, {
    nullable: true
  })
  languages?: DoctorsUpdatelanguagesInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  last_name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  profile_image?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => Enumdoctors_specialty_enumFieldUpdateOperationsInput, {
    nullable: true
  })
  specialty?: Enumdoctors_specialty_enumFieldUpdateOperationsInput | undefined;
}
