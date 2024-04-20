interface SortingStrategy {
  sort(dataset: number[]): void;
}

class BubbleSortStrategy implements SortingStrategy {
  sort(dataset: number[]): void {
      console.log("Sorting using bubble sort");
      // Implement bubble sort logic here
  }
}

class QuickSortStrategy implements SortingStrategy {
  sort(dataset: number[]): void {
      console.log("Sorting using quick sort");
      // Implement quick sort logic here
  }
}

class SortingClient {
  private sorter: SortingStrategy;

  constructor(sorter: SortingStrategy) {
      this.sorter = sorter;
  }

  setSortStrategy(sorter: SortingStrategy): void {
      this.sorter = sorter;
  }

  sortData(dataset: number[]): void {
      this.sorter.sort(dataset);
  }
}

export { SortingClient, BubbleSortStrategy, QuickSortStrategy };
