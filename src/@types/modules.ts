export type FailureAction<T extends { type: string }> = {
  type: `${Pick<T, "type">["type"]}_FAILURE`;
};

export type ApiType<T extends (...args: any) => any> = Awaited<ReturnType<T>>;

export type Loading = boolean | undefined;
export type Error = false | undefined | Exclude<string, " " | "">;
