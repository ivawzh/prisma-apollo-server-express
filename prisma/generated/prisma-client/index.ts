// Code generated by Prisma (prisma@1.25.3). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  authUser: (where?: AuthUserWhereInput) => Promise<boolean>;
  investment: (where?: InvestmentWhereInput) => Promise<boolean>;
  investor: (where?: InvestorWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  authUser: (where: AuthUserWhereUniqueInput) => AuthUserPromise;
  authUsers: (args?: {
    where?: AuthUserWhereInput;
    orderBy?: AuthUserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<AuthUser>;
  authUsersConnection: (args?: {
    where?: AuthUserWhereInput;
    orderBy?: AuthUserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => AuthUserConnectionPromise;
  investment: (where: InvestmentWhereUniqueInput) => InvestmentPromise;
  investments: (args?: {
    where?: InvestmentWhereInput;
    orderBy?: InvestmentOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Investment>;
  investmentsConnection: (args?: {
    where?: InvestmentWhereInput;
    orderBy?: InvestmentOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => InvestmentConnectionPromise;
  investor: (where: InvestorWhereUniqueInput) => InvestorPromise;
  investors: (args?: {
    where?: InvestorWhereInput;
    orderBy?: InvestorOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Investor>;
  investorsConnection: (args?: {
    where?: InvestorWhereInput;
    orderBy?: InvestorOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => InvestorConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createAuthUser: (data: AuthUserCreateInput) => AuthUserPromise;
  updateAuthUser: (args: {
    data: AuthUserUpdateInput;
    where: AuthUserWhereUniqueInput;
  }) => AuthUserPromise;
  updateManyAuthUsers: (args: {
    data: AuthUserUpdateManyMutationInput;
    where?: AuthUserWhereInput;
  }) => BatchPayloadPromise;
  upsertAuthUser: (args: {
    where: AuthUserWhereUniqueInput;
    create: AuthUserCreateInput;
    update: AuthUserUpdateInput;
  }) => AuthUserPromise;
  deleteAuthUser: (where: AuthUserWhereUniqueInput) => AuthUserPromise;
  deleteManyAuthUsers: (where?: AuthUserWhereInput) => BatchPayloadPromise;
  createInvestment: (data: InvestmentCreateInput) => InvestmentPromise;
  updateInvestment: (args: {
    data: InvestmentUpdateInput;
    where: InvestmentWhereUniqueInput;
  }) => InvestmentPromise;
  updateManyInvestments: (args: {
    data: InvestmentUpdateManyMutationInput;
    where?: InvestmentWhereInput;
  }) => BatchPayloadPromise;
  upsertInvestment: (args: {
    where: InvestmentWhereUniqueInput;
    create: InvestmentCreateInput;
    update: InvestmentUpdateInput;
  }) => InvestmentPromise;
  deleteInvestment: (where: InvestmentWhereUniqueInput) => InvestmentPromise;
  deleteManyInvestments: (where?: InvestmentWhereInput) => BatchPayloadPromise;
  createInvestor: (data: InvestorCreateInput) => InvestorPromise;
  updateInvestor: (args: {
    data: InvestorUpdateInput;
    where: InvestorWhereUniqueInput;
  }) => InvestorPromise;
  updateManyInvestors: (args: {
    data: InvestorUpdateManyMutationInput;
    where?: InvestorWhereInput;
  }) => BatchPayloadPromise;
  upsertInvestor: (args: {
    where: InvestorWhereUniqueInput;
    create: InvestorCreateInput;
    update: InvestorUpdateInput;
  }) => InvestorPromise;
  deleteInvestor: (where: InvestorWhereUniqueInput) => InvestorPromise;
  deleteManyInvestors: (where?: InvestorWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  authUser: (
    where?: AuthUserSubscriptionWhereInput
  ) => AuthUserSubscriptionPayloadSubscription;
  investment: (
    where?: InvestmentSubscriptionWhereInput
  ) => InvestmentSubscriptionPayloadSubscription;
  investor: (
    where?: InvestorSubscriptionWhereInput
  ) => InvestorSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type AuthUserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "token_ASC"
  | "token_DESC"
  | "isActive_ASC"
  | "isActive_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type InvestmentOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "companyName_ASC"
  | "companyName_DESC"
  | "shareAmount_ASC"
  | "shareAmount_DESC"
  | "amountPerShare_ASC"
  | "amountPerShare_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type InvestorOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "fistName_ASC"
  | "fistName_DESC"
  | "lastName_ASC"
  | "lastName_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface InvestmentCreateInput {
  companyName: String;
  shareAmount: Float;
  amountPerShare: Float;
  investor: InvestorCreateOneWithoutInvestmentsInput;
}

export type AuthUserWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface AuthUserCreateOneInput {
  create?: AuthUserCreateInput;
  connect?: AuthUserWhereUniqueInput;
}

export interface AuthUserWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  token?: String;
  token_not?: String;
  token_in?: String[] | String;
  token_not_in?: String[] | String;
  token_lt?: String;
  token_lte?: String;
  token_gt?: String;
  token_gte?: String;
  token_contains?: String;
  token_not_contains?: String;
  token_starts_with?: String;
  token_not_starts_with?: String;
  token_ends_with?: String;
  token_not_ends_with?: String;
  isActive?: Boolean;
  isActive_not?: Boolean;
  AND?: AuthUserWhereInput[] | AuthUserWhereInput;
  OR?: AuthUserWhereInput[] | AuthUserWhereInput;
  NOT?: AuthUserWhereInput[] | AuthUserWhereInput;
}

export interface InvestorUpdateInput {
  auth?: AuthUserUpdateOneRequiredInput;
  fistName?: String;
  lastName?: String;
  investments?: InvestmentUpdateManyWithoutInvestorInput;
}

export interface AuthUserUpdateDataInput {
  token?: String;
  isActive?: Boolean;
}

export interface InvestmentCreateWithoutInvestorInput {
  companyName: String;
  shareAmount: Float;
  amountPerShare: Float;
}

export interface InvestmentUpdateInput {
  companyName?: String;
  shareAmount?: Float;
  amountPerShare?: Float;
  investor?: InvestorUpdateOneRequiredWithoutInvestmentsInput;
}

export interface InvestmentSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: InvestmentWhereInput;
  AND?: InvestmentSubscriptionWhereInput[] | InvestmentSubscriptionWhereInput;
  OR?: InvestmentSubscriptionWhereInput[] | InvestmentSubscriptionWhereInput;
  NOT?: InvestmentSubscriptionWhereInput[] | InvestmentSubscriptionWhereInput;
}

export interface AuthUserSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: AuthUserWhereInput;
  AND?: AuthUserSubscriptionWhereInput[] | AuthUserSubscriptionWhereInput;
  OR?: AuthUserSubscriptionWhereInput[] | AuthUserSubscriptionWhereInput;
  NOT?: AuthUserSubscriptionWhereInput[] | AuthUserSubscriptionWhereInput;
}

export interface AuthUserCreateInput {
  token: String;
  isActive: Boolean;
}

export interface InvestmentUpdateManyDataInput {
  companyName?: String;
  shareAmount?: Float;
  amountPerShare?: Float;
}

export interface AuthUserUpdateInput {
  token?: String;
  isActive?: Boolean;
}

export interface InvestorWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  auth?: AuthUserWhereInput;
  fistName?: String;
  fistName_not?: String;
  fistName_in?: String[] | String;
  fistName_not_in?: String[] | String;
  fistName_lt?: String;
  fistName_lte?: String;
  fistName_gt?: String;
  fistName_gte?: String;
  fistName_contains?: String;
  fistName_not_contains?: String;
  fistName_starts_with?: String;
  fistName_not_starts_with?: String;
  fistName_ends_with?: String;
  fistName_not_ends_with?: String;
  lastName?: String;
  lastName_not?: String;
  lastName_in?: String[] | String;
  lastName_not_in?: String[] | String;
  lastName_lt?: String;
  lastName_lte?: String;
  lastName_gt?: String;
  lastName_gte?: String;
  lastName_contains?: String;
  lastName_not_contains?: String;
  lastName_starts_with?: String;
  lastName_not_starts_with?: String;
  lastName_ends_with?: String;
  lastName_not_ends_with?: String;
  investments_every?: InvestmentWhereInput;
  investments_some?: InvestmentWhereInput;
  investments_none?: InvestmentWhereInput;
  AND?: InvestorWhereInput[] | InvestorWhereInput;
  OR?: InvestorWhereInput[] | InvestorWhereInput;
  NOT?: InvestorWhereInput[] | InvestorWhereInput;
}

export interface AuthUserUpdateManyMutationInput {
  token?: String;
  isActive?: Boolean;
}

export interface InvestmentScalarWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  companyName?: String;
  companyName_not?: String;
  companyName_in?: String[] | String;
  companyName_not_in?: String[] | String;
  companyName_lt?: String;
  companyName_lte?: String;
  companyName_gt?: String;
  companyName_gte?: String;
  companyName_contains?: String;
  companyName_not_contains?: String;
  companyName_starts_with?: String;
  companyName_not_starts_with?: String;
  companyName_ends_with?: String;
  companyName_not_ends_with?: String;
  shareAmount?: Float;
  shareAmount_not?: Float;
  shareAmount_in?: Float[] | Float;
  shareAmount_not_in?: Float[] | Float;
  shareAmount_lt?: Float;
  shareAmount_lte?: Float;
  shareAmount_gt?: Float;
  shareAmount_gte?: Float;
  amountPerShare?: Float;
  amountPerShare_not?: Float;
  amountPerShare_in?: Float[] | Float;
  amountPerShare_not_in?: Float[] | Float;
  amountPerShare_lt?: Float;
  amountPerShare_lte?: Float;
  amountPerShare_gt?: Float;
  amountPerShare_gte?: Float;
  AND?: InvestmentScalarWhereInput[] | InvestmentScalarWhereInput;
  OR?: InvestmentScalarWhereInput[] | InvestmentScalarWhereInput;
  NOT?: InvestmentScalarWhereInput[] | InvestmentScalarWhereInput;
}

export interface InvestmentCreateManyWithoutInvestorInput {
  create?:
    | InvestmentCreateWithoutInvestorInput[]
    | InvestmentCreateWithoutInvestorInput;
  connect?: InvestmentWhereUniqueInput[] | InvestmentWhereUniqueInput;
}

export interface InvestmentUpdateWithoutInvestorDataInput {
  companyName?: String;
  shareAmount?: Float;
  amountPerShare?: Float;
}

export interface InvestorCreateInput {
  auth: AuthUserCreateOneInput;
  fistName: String;
  lastName: String;
  investments?: InvestmentCreateManyWithoutInvestorInput;
}

export interface InvestmentUpdateWithWhereUniqueWithoutInvestorInput {
  where: InvestmentWhereUniqueInput;
  data: InvestmentUpdateWithoutInvestorDataInput;
}

export interface InvestmentUpdateManyMutationInput {
  companyName?: String;
  shareAmount?: Float;
  amountPerShare?: Float;
}

export interface InvestorSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: InvestorWhereInput;
  AND?: InvestorSubscriptionWhereInput[] | InvestorSubscriptionWhereInput;
  OR?: InvestorSubscriptionWhereInput[] | InvestorSubscriptionWhereInput;
  NOT?: InvestorSubscriptionWhereInput[] | InvestorSubscriptionWhereInput;
}

export interface InvestorCreateOneWithoutInvestmentsInput {
  create?: InvestorCreateWithoutInvestmentsInput;
  connect?: InvestorWhereUniqueInput;
}

export interface InvestorUpdateManyMutationInput {
  fistName?: String;
  lastName?: String;
}

export interface InvestorCreateWithoutInvestmentsInput {
  auth: AuthUserCreateOneInput;
  fistName: String;
  lastName: String;
}

export interface InvestmentUpdateManyWithWhereNestedInput {
  where: InvestmentScalarWhereInput;
  data: InvestmentUpdateManyDataInput;
}

export interface InvestorUpsertWithoutInvestmentsInput {
  update: InvestorUpdateWithoutInvestmentsDataInput;
  create: InvestorCreateWithoutInvestmentsInput;
}

export type InvestorWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface AuthUserUpdateOneRequiredInput {
  create?: AuthUserCreateInput;
  update?: AuthUserUpdateDataInput;
  upsert?: AuthUserUpsertNestedInput;
  connect?: AuthUserWhereUniqueInput;
}

export interface InvestorUpdateWithoutInvestmentsDataInput {
  auth?: AuthUserUpdateOneRequiredInput;
  fistName?: String;
  lastName?: String;
}

export interface InvestorUpdateOneRequiredWithoutInvestmentsInput {
  create?: InvestorCreateWithoutInvestmentsInput;
  update?: InvestorUpdateWithoutInvestmentsDataInput;
  upsert?: InvestorUpsertWithoutInvestmentsInput;
  connect?: InvestorWhereUniqueInput;
}

export interface AuthUserUpsertNestedInput {
  update: AuthUserUpdateDataInput;
  create: AuthUserCreateInput;
}

export interface InvestmentUpdateManyWithoutInvestorInput {
  create?:
    | InvestmentCreateWithoutInvestorInput[]
    | InvestmentCreateWithoutInvestorInput;
  delete?: InvestmentWhereUniqueInput[] | InvestmentWhereUniqueInput;
  connect?: InvestmentWhereUniqueInput[] | InvestmentWhereUniqueInput;
  disconnect?: InvestmentWhereUniqueInput[] | InvestmentWhereUniqueInput;
  update?:
    | InvestmentUpdateWithWhereUniqueWithoutInvestorInput[]
    | InvestmentUpdateWithWhereUniqueWithoutInvestorInput;
  upsert?:
    | InvestmentUpsertWithWhereUniqueWithoutInvestorInput[]
    | InvestmentUpsertWithWhereUniqueWithoutInvestorInput;
  deleteMany?: InvestmentScalarWhereInput[] | InvestmentScalarWhereInput;
  updateMany?:
    | InvestmentUpdateManyWithWhereNestedInput[]
    | InvestmentUpdateManyWithWhereNestedInput;
}

export interface InvestmentUpsertWithWhereUniqueWithoutInvestorInput {
  where: InvestmentWhereUniqueInput;
  update: InvestmentUpdateWithoutInvestorDataInput;
  create: InvestmentCreateWithoutInvestorInput;
}

export interface InvestmentWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  companyName?: String;
  companyName_not?: String;
  companyName_in?: String[] | String;
  companyName_not_in?: String[] | String;
  companyName_lt?: String;
  companyName_lte?: String;
  companyName_gt?: String;
  companyName_gte?: String;
  companyName_contains?: String;
  companyName_not_contains?: String;
  companyName_starts_with?: String;
  companyName_not_starts_with?: String;
  companyName_ends_with?: String;
  companyName_not_ends_with?: String;
  shareAmount?: Float;
  shareAmount_not?: Float;
  shareAmount_in?: Float[] | Float;
  shareAmount_not_in?: Float[] | Float;
  shareAmount_lt?: Float;
  shareAmount_lte?: Float;
  shareAmount_gt?: Float;
  shareAmount_gte?: Float;
  amountPerShare?: Float;
  amountPerShare_not?: Float;
  amountPerShare_in?: Float[] | Float;
  amountPerShare_not_in?: Float[] | Float;
  amountPerShare_lt?: Float;
  amountPerShare_lte?: Float;
  amountPerShare_gt?: Float;
  amountPerShare_gte?: Float;
  investor?: InvestorWhereInput;
  AND?: InvestmentWhereInput[] | InvestmentWhereInput;
  OR?: InvestmentWhereInput[] | InvestmentWhereInput;
  NOT?: InvestmentWhereInput[] | InvestmentWhereInput;
}

export type InvestmentWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface NodeNode {
  id: ID_Output;
}

export interface InvestorPreviousValues {
  id: ID_Output;
  fistName: String;
  lastName: String;
}

export interface InvestorPreviousValuesPromise
  extends Promise<InvestorPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  fistName: () => Promise<String>;
  lastName: () => Promise<String>;
}

export interface InvestorPreviousValuesSubscription
  extends Promise<AsyncIterator<InvestorPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  fistName: () => Promise<AsyncIterator<String>>;
  lastName: () => Promise<AsyncIterator<String>>;
}

export interface AuthUserConnection {
  pageInfo: PageInfo;
  edges: AuthUserEdge[];
}

export interface AuthUserConnectionPromise
  extends Promise<AuthUserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<AuthUserEdge>>() => T;
  aggregate: <T = AggregateAuthUserPromise>() => T;
}

export interface AuthUserConnectionSubscription
  extends Promise<AsyncIterator<AuthUserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<AuthUserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateAuthUserSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface InvestmentConnection {
  pageInfo: PageInfo;
  edges: InvestmentEdge[];
}

export interface InvestmentConnectionPromise
  extends Promise<InvestmentConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<InvestmentEdge>>() => T;
  aggregate: <T = AggregateInvestmentPromise>() => T;
}

export interface InvestmentConnectionSubscription
  extends Promise<AsyncIterator<InvestmentConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<InvestmentEdgeSubscription>>>() => T;
  aggregate: <T = AggregateInvestmentSubscription>() => T;
}

export interface AggregateAuthUser {
  count: Int;
}

export interface AggregateAuthUserPromise
  extends Promise<AggregateAuthUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateAuthUserSubscription
  extends Promise<AsyncIterator<AggregateAuthUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface AuthUserEdge {
  node: AuthUser;
  cursor: String;
}

export interface AuthUserEdgePromise
  extends Promise<AuthUserEdge>,
    Fragmentable {
  node: <T = AuthUserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface AuthUserEdgeSubscription
  extends Promise<AsyncIterator<AuthUserEdge>>,
    Fragmentable {
  node: <T = AuthUserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface Investor {
  id: ID_Output;
  fistName: String;
  lastName: String;
}

export interface InvestorPromise extends Promise<Investor>, Fragmentable {
  id: () => Promise<ID_Output>;
  auth: <T = AuthUserPromise>() => T;
  fistName: () => Promise<String>;
  lastName: () => Promise<String>;
  investments: <T = FragmentableArray<Investment>>(args?: {
    where?: InvestmentWhereInput;
    orderBy?: InvestmentOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface InvestorSubscription
  extends Promise<AsyncIterator<Investor>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  auth: <T = AuthUserSubscription>() => T;
  fistName: () => Promise<AsyncIterator<String>>;
  lastName: () => Promise<AsyncIterator<String>>;
  investments: <T = Promise<AsyncIterator<InvestmentSubscription>>>(args?: {
    where?: InvestmentWhereInput;
    orderBy?: InvestmentOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface InvestmentPreviousValues {
  id: ID_Output;
  companyName: String;
  shareAmount: Float;
  amountPerShare: Float;
}

export interface InvestmentPreviousValuesPromise
  extends Promise<InvestmentPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  companyName: () => Promise<String>;
  shareAmount: () => Promise<Float>;
  amountPerShare: () => Promise<Float>;
}

export interface InvestmentPreviousValuesSubscription
  extends Promise<AsyncIterator<InvestmentPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  companyName: () => Promise<AsyncIterator<String>>;
  shareAmount: () => Promise<AsyncIterator<Float>>;
  amountPerShare: () => Promise<AsyncIterator<Float>>;
}

export interface AggregateInvestor {
  count: Int;
}

export interface AggregateInvestorPromise
  extends Promise<AggregateInvestor>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateInvestorSubscription
  extends Promise<AsyncIterator<AggregateInvestor>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface InvestmentSubscriptionPayload {
  mutation: MutationType;
  node: Investment;
  updatedFields: String[];
  previousValues: InvestmentPreviousValues;
}

export interface InvestmentSubscriptionPayloadPromise
  extends Promise<InvestmentSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = InvestmentPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = InvestmentPreviousValuesPromise>() => T;
}

export interface InvestmentSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<InvestmentSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = InvestmentSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = InvestmentPreviousValuesSubscription>() => T;
}

export interface InvestorConnection {
  pageInfo: PageInfo;
  edges: InvestorEdge[];
}

export interface InvestorConnectionPromise
  extends Promise<InvestorConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<InvestorEdge>>() => T;
  aggregate: <T = AggregateInvestorPromise>() => T;
}

export interface InvestorConnectionSubscription
  extends Promise<AsyncIterator<InvestorConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<InvestorEdgeSubscription>>>() => T;
  aggregate: <T = AggregateInvestorSubscription>() => T;
}

export interface AggregateInvestment {
  count: Int;
}

export interface AggregateInvestmentPromise
  extends Promise<AggregateInvestment>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateInvestmentSubscription
  extends Promise<AsyncIterator<AggregateInvestment>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface AuthUserPreviousValues {
  id: ID_Output;
  token: String;
  isActive: Boolean;
}

export interface AuthUserPreviousValuesPromise
  extends Promise<AuthUserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  token: () => Promise<String>;
  isActive: () => Promise<Boolean>;
}

export interface AuthUserPreviousValuesSubscription
  extends Promise<AsyncIterator<AuthUserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  token: () => Promise<AsyncIterator<String>>;
  isActive: () => Promise<AsyncIterator<Boolean>>;
}

export interface AuthUserSubscriptionPayload {
  mutation: MutationType;
  node: AuthUser;
  updatedFields: String[];
  previousValues: AuthUserPreviousValues;
}

export interface AuthUserSubscriptionPayloadPromise
  extends Promise<AuthUserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = AuthUserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = AuthUserPreviousValuesPromise>() => T;
}

export interface AuthUserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<AuthUserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = AuthUserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = AuthUserPreviousValuesSubscription>() => T;
}

export interface AuthUser {
  id: ID_Output;
  token: String;
  isActive: Boolean;
}

export interface AuthUserPromise extends Promise<AuthUser>, Fragmentable {
  id: () => Promise<ID_Output>;
  token: () => Promise<String>;
  isActive: () => Promise<Boolean>;
}

export interface AuthUserSubscription
  extends Promise<AsyncIterator<AuthUser>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  token: () => Promise<AsyncIterator<String>>;
  isActive: () => Promise<AsyncIterator<Boolean>>;
}

export interface Investment {
  id: ID_Output;
  companyName: String;
  shareAmount: Float;
  amountPerShare: Float;
}

export interface InvestmentPromise extends Promise<Investment>, Fragmentable {
  id: () => Promise<ID_Output>;
  companyName: () => Promise<String>;
  shareAmount: () => Promise<Float>;
  amountPerShare: () => Promise<Float>;
  investor: <T = InvestorPromise>() => T;
}

export interface InvestmentSubscription
  extends Promise<AsyncIterator<Investment>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  companyName: () => Promise<AsyncIterator<String>>;
  shareAmount: () => Promise<AsyncIterator<Float>>;
  amountPerShare: () => Promise<AsyncIterator<Float>>;
  investor: <T = InvestorSubscription>() => T;
}

export interface InvestmentEdge {
  node: Investment;
  cursor: String;
}

export interface InvestmentEdgePromise
  extends Promise<InvestmentEdge>,
    Fragmentable {
  node: <T = InvestmentPromise>() => T;
  cursor: () => Promise<String>;
}

export interface InvestmentEdgeSubscription
  extends Promise<AsyncIterator<InvestmentEdge>>,
    Fragmentable {
  node: <T = InvestmentSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface InvestorSubscriptionPayload {
  mutation: MutationType;
  node: Investor;
  updatedFields: String[];
  previousValues: InvestorPreviousValues;
}

export interface InvestorSubscriptionPayloadPromise
  extends Promise<InvestorSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = InvestorPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = InvestorPreviousValuesPromise>() => T;
}

export interface InvestorSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<InvestorSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = InvestorSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = InvestorPreviousValuesSubscription>() => T;
}

export interface InvestorEdge {
  node: Investor;
  cursor: String;
}

export interface InvestorEdgePromise
  extends Promise<InvestorEdge>,
    Fragmentable {
  node: <T = InvestorPromise>() => T;
  cursor: () => Promise<String>;
}

export interface InvestorEdgeSubscription
  extends Promise<AsyncIterator<InvestorEdge>>,
    Fragmentable {
  node: <T = InvestorSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

export type Long = string;

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). 
*/
export type Float = number;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "AuthUser",
    embedded: false
  },
  {
    name: "Investment",
    embedded: false
  },
  {
    name: "Investor",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const Prisma = makePrismaClientClass<ClientConstructor<Prisma>>({
  typeDefs,
  models,
  endpoint: `http://localhost:4466`
});
export const prisma = new Prisma();
