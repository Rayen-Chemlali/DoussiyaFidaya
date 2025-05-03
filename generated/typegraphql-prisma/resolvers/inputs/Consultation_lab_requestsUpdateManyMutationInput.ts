import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import {GraphQLString} from "graphql/type";

@TypeGraphQL.InputType("Consultation_lab_requestsUpdateManyMutationInput", {})
export class Consultation_lab_requestsUpdateManyMutationInput {
    @TypeGraphQL.Field(_type => GraphQLString, {
        nullable: true
    })
    consultation_id?: string | undefined;

}
