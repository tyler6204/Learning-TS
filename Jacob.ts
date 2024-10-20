interface Book {
  id: number;
  title: string;
  author: string;
  pages: number;
  rating: number;
}

class Library {
  private books: Book[] = [];

  addBook(book: Book): void {
    this.books.push(book);
  }

  removeBook(): void {
    this.books.pop();
  }

  calculateTotalPages(): number {
    return this.books.reduce((sum, book) => sum + book.pages, 0);
  }

  calculateAveragePages(): number {
    return this.calculateTotalPages() / this.books.length;
  }
}

function Main() {
  const library = new Library();

  // Add sample books
  library.addBook({ id: 1, title: "Book One", author: "Author A", pages: 300, rating: 4 });
  library.addBook({ id: 2, title: "Book Two", author: "Author B", pages: 150, rating: 5 });
  library.addBook({ id: 3, title: "Book Three", author: "Author C", pages: 250, rating: 3 });


  // // Calculate and log total pages
  const totalPages = library.calculateTotalPages();
  console.log(`Total Pages: ${totalPages}`);

  // // // Calculate and log average rating
  const averagePages = library.calculateAveragePages();
  console.log(`Average Pages: ${averagePages.toFixed(0)}`);
}

// Execute the main function
Main();
