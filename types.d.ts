interface Book{
    id:string,
    title:string,
    author:string,
    genre:string,
    rating:number,
    totalCopies:number,
    availableCopies:number,
    description:string,
    coverUrl:string,
    coverColor:string,
    videoUrl:string,
    summary:string,
    createdAt:Date|null,
}

interface AuthCredentials{
    fullName:string,
    email:string,
    password:string,
    universityId:number,
    universityCard:string
}

interface BookParams{
    title:string,
    author:string,
    rating:number,
    genre:string,
    coverUrl:string,
    coverColor:string,
    description:string,
    totalCopies:number,
    videoUrl:string,
    summary:string
}

interface BorrowBookParams{
    bookId:string,
    userId:string
}