const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api";

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  timestamp?: string;
  path?: string;
  accessToken?: string;
  refreshToken?: string;
  user?: T;
}

export interface UserDto {
  id: string;
  name: string;
  username: string;
  email: string;
  authProvider: "EMAIL" | "GOOGLE";
  role: "STUDENT" | "MENTOR" | "EDUCATOR" | "USER";
  profileImage?: string;
  university?: string;
  createdAt?: string;
}

export async function apiRequest<T = any>(
  endpoint: string,
  method: "GET" | "POST" | "PUT" | "DELETE" = "GET",
  body?: any,
  token?: string
): Promise<ApiResponse<T>> {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  try {
    const res = await fetch(`${API_BASE_URL}${endpoint}`, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || `Request failed with status ${res.status}`);
    }

    return data;
  } catch (err: any) {
    throw new Error(err.message || "Network error. Please check if the backend server is running.");
  }
}
