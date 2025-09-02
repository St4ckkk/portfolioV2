import { useState, useEffect } from 'react';

interface GitHubData {
  followers: number;
  following: number;
  public_repos: number;
  avatar_url: string;
  name: string;
  login: string;
  location: string;
  blog: string;
  bio?: string;
  company?: string;
  twitter_username?: string;
  created_at: string;
  updated_at: string;
}

interface GitHubContributions {
  totalContributions: number;
  contributions: Array<{
    date: string;
    count: number;
    level: number;
  }>;
}

export const useGitHubData = (username: string) => {
  const [data, setData] = useState<GitHubData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://api.github.com/users/${username}`);
        
        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`);
        }
        
        const userData = await response.json();
        setData(userData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch GitHub data');
      } finally {
        setLoading(false);
      }
    };

    if (username) {
      fetchGitHubData();
    }
  }, [username]);

  return { data, loading, error };
};

export const useGitHubContributions = (username: string) => {
  const [contributions, setContributions] = useState<GitHubContributions | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch contributions: ${response.status}`);
        }
        
        const data = await response.json();
        setContributions({
          totalContributions: data.total || 0,
          contributions: data.contributions || []
        });
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch contributions');
      } finally {
        setLoading(false);
      }
    };

    if (username) {
      fetchContributions();
    }
  }, [username]);

  return { contributions, loading, error };
};