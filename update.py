import os
import git
import time


def git_commit_and_push():
    # Change to the current directory
    repo_path = '.'  # Replace with the actual path to your Git repository
    repo = git.Repo(repo_path)

    # Check if there are any changes
    if repo.is_dirty():
        # Add all changes to the staging area
        repo.index.add('*')

        # Commit the changes with a timestamp
        timestamp = time.strftime('%Y-%m-%d %H:%M:%S')
        repo.index.commit(f'Automatic commit at {timestamp}')
        print(f'Changes committed with timestamp {timestamp}')

        # Push the changes to the remote repository
        origin = repo.remote(name='origin')
        origin.push()


if __name__ == "__main__":
    while True:
        git_commit_and_push()
        time.sleep(60)  # Wait for 1 minute before checking again
