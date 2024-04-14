import { useState } from "react"


// хук для обработки индикации загрузки и отлавливания ошибок запроса данных с сервера
export const useFetching = (callback) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  
  const fetching = async () => {
    try {
      setIsLoading(true);
      await callback();
    } 
    catch (error) {
      setError(true);
    } 
    finally {
      setIsLoading(false);
    }
  }

  return [fetching, isLoading, error];
}
