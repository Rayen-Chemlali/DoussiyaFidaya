import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("Doctor_institutsUpdateManyMutationInput", {})
export class Doctor_institutsUpdateManyMutationInput {
    @TypeGraphQL.Field(_type => String, {
        nullable: true
    })
    name?: string | undefined;

    @TypeGraphQL.Field(_type => String, {
        nullable: true
    })
    address?: string | undefined;

    @TypeGraphQL.Field(_type => String, {
        nullable: true
    })
    phone?: string | undefined;

    @TypeGraphQL.Field(_type => String, {
        nullable: true
    })
    email?: string | undefined;

    @TypeGraphQL.Field(_type => String, {
        nullable: true
    })
    website?: string | undefined;
}
