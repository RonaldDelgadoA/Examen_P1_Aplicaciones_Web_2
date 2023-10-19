

export class CreateIRequestDto {

  private constructor(
    public readonly text: string,
  ){}


  static create( props: {[key:string]: any} ): [string?, CreateIRequestDto?]  {

    const { text } = props;

    if ( !text ) return ['Text property is required', undefined];


    return [undefined, new CreateTodoDto(text)];
  }

}