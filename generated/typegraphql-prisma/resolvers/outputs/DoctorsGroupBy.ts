import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorsCountAggregate } from "../outputs/DoctorsCountAggregate";
import { DoctorsMaxAggregate } from "../outputs/DoctorsMaxAggregate";
import { DoctorsMinAggregate } from "../outputs/DoctorsMinAggregate";
import { doctors_specialty_enum } from "../../enums/doctors_specialty_enum";
import { doctors_type_enum } from "../../enums/doctors_type_enum";

@TypeGraphQL.ObjectType("DoctorsGroupBy", {})
export class DoctorsGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => doctors_type_enum, {
    nullable: false
  })
  type!: "doctor" | "clinique" | "hopital";

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  bio!: string | null;

  @TypeGraphQL.Field(_type => [String], {
    nullable: true
  })
  education!: string[] | null;

  @TypeGraphQL.Field(_type => [String], {
    nullable: true
  })
  experience!: string[] | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  first_name!: string;

  @TypeGraphQL.Field(_type => [String], {
    nullable: true
  })
  languages!: string[] | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  last_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  profile_image!: string | null;

  @TypeGraphQL.Field(_type => doctors_specialty_enum, {
    nullable: false
  })
  specialty!: "generaliste" | "cardiologue" | "dermatologue" | "gynecologue" | "pediatre" | "orthopediste" | "psychiatre" | "ophtalmologue" | "otorhinolaryngologue" | "neurologue" | "urologue" | "endocrinologue" | "gastroenterologue" | "rheumatologue" | "anesthesiste" | "radiologue" | "oncologue" | "chirurgien" | "nutritionniste" | "physiotherapeute" | "psychologue" | "sexologue" | "geriatre" | "allergologue" | "hematologue" | "nephrologue" | "pneumologue" | "dentiste" | "orthodontiste" | "autre";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  user_id!: string;

  @TypeGraphQL.Field(_type => DoctorsCountAggregate, {
    nullable: true
  })
  _count!: DoctorsCountAggregate | null;

  @TypeGraphQL.Field(_type => DoctorsMinAggregate, {
    nullable: true
  })
  _min!: DoctorsMinAggregate | null;

  @TypeGraphQL.Field(_type => DoctorsMaxAggregate, {
    nullable: true
  })
  _max!: DoctorsMaxAggregate | null;
}
