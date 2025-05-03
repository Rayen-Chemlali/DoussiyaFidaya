import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Doctor_institutsCountAggregate } from "../outputs/Doctor_institutsCountAggregate";
import { Doctor_institutsMaxAggregate } from "../outputs/Doctor_institutsMaxAggregate";
import { Doctor_institutsMinAggregate } from "../outputs/Doctor_institutsMinAggregate";

@TypeGraphQL.ObjectType("Doctor_institutsGroupBy", {})
export class Doctor_institutsGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  doctor_id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  institut_medical_id!: string;

  @TypeGraphQL.Field(_type => Doctor_institutsCountAggregate, {
    nullable: true
  })
  _count!: Doctor_institutsCountAggregate | null;

  @TypeGraphQL.Field(_type => Doctor_institutsMinAggregate, {
    nullable: true
  })
  _min!: Doctor_institutsMinAggregate | null;

  @TypeGraphQL.Field(_type => Doctor_institutsMaxAggregate, {
    nullable: true
  })
  _max!: Doctor_institutsMaxAggregate | null;
}
