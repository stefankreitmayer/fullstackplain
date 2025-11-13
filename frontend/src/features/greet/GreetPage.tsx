import { useQuery } from "@tanstack/react-query";
import { GreetingResponse } from "@fullstackplain/shared";
import { getApiUrl } from "../../api/api";

const fetchGreeting = async (): Promise<GreetingResponse> => {
  const response = await fetch(getApiUrl("greet"));

  if (!response.ok) {
    throw new Error("Failed to fetch greeting");
  }

  return response.json();
};

export function GreetPage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["greeting"],
    queryFn: fetchGreeting,
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg text-red-600">
          Error: {error instanceof Error ? error.message : "An error occurred"}
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-2xl font-semibold">{data?.greeting}</div>
    </div>
  );
}
