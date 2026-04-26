export type OpenAIJobMatchRequest = {
  cvText: string
  jobDescription: string
  model?: string
}

export type OpenAIResumeRewriteRequest = {
  cvText: string
  targetRole: string
  keywords: string[]
  model?: string
}

export type OpenAIServiceResponse = {
  text: string
  usage?: {
    inputTokens?: number
    outputTokens?: number
  }
}

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL ?? '/api'

async function postJson<T>(path: string, body: Record<string, unknown>): Promise<T> {
  const response = await fetch(`${apiBaseUrl}${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(errorText || 'The OpenAI request failed.')
  }

  return (await response.json()) as T
}

export function matchJobs(input: OpenAIJobMatchRequest) {
  return postJson<OpenAIServiceResponse>('/openai/job-match', {
    ...input,
    model: input.model ?? 'gpt-4.1-mini',
  })
}

export function rewriteResume(input: OpenAIResumeRewriteRequest) {
  return postJson<OpenAIServiceResponse>('/openai/resume-rewrite', {
    ...input,
    model: input.model ?? 'gpt-4.1-mini',
  })
}