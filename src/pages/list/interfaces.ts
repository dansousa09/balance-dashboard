export interface IRouteParams {
  match: {
    params: {
      type: string;
    };
  };
}

export interface IData {
  id: string;
  description: string;
  formattedAmount: string;
  type: string;
  frequency: string;
  formattedDate: string;
  tagColor: string;
}
