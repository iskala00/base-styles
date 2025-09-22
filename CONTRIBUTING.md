# Contributing

## Commit Convention

This project uses [Conventional Commits](https://www.conventionalcommits.org/) for automatic versioning and changelog generation.

### Commit Message Format

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Types

- `feat`: A new feature (triggers minor version bump)
- `fix`: A bug fix (triggers patch version bump)
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Adding missing tests or correcting existing tests
- `build`: Changes that affect the build system or external dependencies
- `ci`: Changes to CI configuration files and scripts
- `chore`: Other changes that don't modify src or test files
- `revert`: Reverts a previous commit

### Breaking Changes

Add `BREAKING CHANGE:` in the commit footer or add `!` after the type to trigger a major version bump:

```
feat!: remove deprecated API
```

or

```
feat: add new API

BREAKING CHANGE: The old API has been removed
```

### Examples

- `feat: add new button component`
- `fix: resolve spacing issue in container`
- `docs: update README with usage examples`
- `feat!: change CSS variable naming convention`

## Release Process

Releases are automated via GitHub Actions:

1. Push commits to `main` or `master` branch
2. GitHub Actions will:
   - Run tests and build
   - Analyze commits for version bumps
   - Generate changelog
   - Create GitHub release
   - Publish to npm
   - Update package.json version

### Manual Release (if needed)

```bash
# Dry run to see what would be released
bun run release:dry

# Actual release (requires NPM_TOKEN and GITHUB_TOKEN)
bun run release
```
