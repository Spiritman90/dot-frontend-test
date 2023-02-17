export type Icategories = {
  id: string;
  items: Inominees[];
  title: string;
};
export type Inominees = {
  id: string;
  photoUrL: string;
  title: string;
};

export type ballotProps = {
  category_title: string;
  category_nomines: Inominees[];
  category_id: string;
  isLastCategory: boolean;
  submitHandler: () => void;
  disable_submit_button: boolean;
};

export type Iselected = Record<string, string>;

export type IappContext = {
  selectHandler: (category: string, data: string) => void;
  selected: Iselected;
};

export type CardProps = {
  nominee: string;
  nomineeImage: string;
  category_id: string;
  // button: React.MouseEventHandler<HTMLButtonElement>;
};
