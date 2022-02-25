// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as path from 'path';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "admin-generate-code" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('admin-generate-code.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		// vscode.window.showInformationMessage('Hello World from admin-generate-code!');
		// vscode.commands.executeCommand('editor.action.addCommentLine')
		const panel = vscode.window.createWebviewPanel(
			'collect',
			'Form Collect',
			vscode.ViewColumn.One, //显示第一个面板?
			{
				enableScripts: true
			}
		)
		panel.webview.onDidReceiveMessage(
			message => {
				switch (message.command) {
					case 'save':
						console.log(message.data)
						vscode.window.showWarningMessage(message.data.name);
						return;
				}
			},
			undefined,
			context.subscriptions
		);

		const onDiskPath = vscode.Uri.file(
			path.join(context.extensionPath, 'source/assets', 'index.218a402d.js')
		);
		const jsSrc = panel.webview.asWebviewUri(onDiskPath);
		panel.webview.html = getWebviewContent(jsSrc);
	});
	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}

function getWebviewContent(jsSrc:any) {
	return `<!DOCTYPE html>
	<html lang="en">
		<head>
			<meta charset="UTF-8" />
			<link rel="icon" type="image/svg+xml" href="/assets/favicon.17e50649.svg" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<title>Vite App</title>
			<script type="module" crossorigin src="${jsSrc}"></script>
			<link rel="stylesheet" href="/assets/index.cd9c0392.css">
		</head>
		<body>
			<div id="root">no script</div>
			
		</body>
	</html>`
}
