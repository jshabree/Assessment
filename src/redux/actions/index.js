import * as Types from "./types";

export const getData = obj => {
    return {
      type: Types.GET_DATA,
      payload: obj
    };
  }