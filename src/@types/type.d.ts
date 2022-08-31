interface ActionType<PayloadType = unknown> {
  type: string;
  payload?: PayloadType;
}

interface AnyObject {
  [key: string]: value;
}
