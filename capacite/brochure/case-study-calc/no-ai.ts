// Read-only guard: strip model keys so askScenario never calls a model or writes its cache.
for (const k of ["ANTHROPIC_API_KEY", "ANTHROPIC_KEY", "OPENAI_API_KEY", "GROQ_API_KEY"]) delete process.env[k];
