import { exec } from 'child_process';
import { kebabize } from './common';
export const commandFunction = (start, subCommands) => (context) => (options) => {
    const command = Object.entries(options !== null && options !== void 0 ? options : {}).reduce((acc, [key, value]) => {
        switch (typeof value) {
            case 'boolean':
                if (value)
                    acc += ` --${kebabize(key)}`;
                break;
            case 'string':
            case 'number':
            case 'bigint':
                acc += ` --${kebabize(key.toString())} ${value}`;
                break;
            default:
                break;
        }
        return acc;
    }, `${context} ${kebabize(start)}`);
    const run = () => new Promise((resolve, reject) => {
        exec(command, (error, stdout, stderr) => {
            if (error) {
                reject(error);
            }
            else if (stderr) {
                reject(stderr);
            }
            else {
                resolve(stdout);
            }
        });
    });
    return Object.assign({ command,
        run }, Object.entries(subCommands !== null && subCommands !== void 0 ? subCommands : {}).reduce((acc, [key, value]) => {
        ;
        acc[key] = value(command);
        return acc;
    }, {}));
};
export const cardanoCliCommand = (command, subCommands) => commandFunction(command, subCommands);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21tYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFDcEMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFVBQVUsQ0FBQTtBQTJEbkMsTUFBTSxDQUFDLE1BQU0sZUFBZSxHQUMzQixDQWlCQyxLQUFhLEVBQ2IsV0FBZ0IsRUFDZixFQUFFLENBQ0osQ0FBQyxPQUFlLEVBQUUsRUFBRSxDQUNwQixDQUFDLE9BQTRCLEVBQUUsRUFBRTtJQUNoQyxNQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sYUFBUCxPQUFPLGNBQVAsT0FBTyxHQUFJLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFFO1FBQ2xGLFFBQVEsT0FBTyxLQUFLLEVBQUU7WUFDckIsS0FBSyxTQUFTO2dCQUNiLElBQUksS0FBSztvQkFBRSxHQUFHLElBQUksTUFBTSxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQTtnQkFDdkMsTUFBSztZQUNOLEtBQUssUUFBUSxDQUFDO1lBQ2QsS0FBSyxRQUFRLENBQUM7WUFDZCxLQUFLLFFBQVE7Z0JBQ1osR0FBRyxJQUFJLE1BQU0sUUFBUSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFBO2dCQUNoRCxNQUFLO1lBQ047Z0JBQ0MsTUFBSztTQUNOO1FBQ0QsT0FBTyxHQUFHLENBQUE7SUFDWCxDQUFDLEVBQUUsR0FBRyxPQUFPLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUNuQyxNQUFNLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FDaEIsSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7UUFDL0IsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDdkMsSUFBSSxLQUFLLEVBQUU7Z0JBQ1YsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFBO2FBQ2I7aUJBQU0sSUFBSSxNQUFNLEVBQUU7Z0JBQ2xCLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQTthQUNkO2lCQUFNO2dCQUNOLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQTthQUNmO1FBQ0YsQ0FBQyxDQUFDLENBQUE7SUFDSCxDQUFDLENBQUMsQ0FBQTtJQUNILHVCQUNDLE9BQU87UUFDUCxHQUFHLElBQ0EsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLGFBQVgsV0FBVyxjQUFYLFdBQVcsR0FBSSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRTtRQUN0RSxDQUFDO1FBQUMsR0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFJLEtBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUM1QyxPQUFPLEdBQUcsQ0FBQTtJQUNYLENBQUMsRUFBRSxFQUFTLENBQUMsRUFDYjtBQUNGLENBQUMsQ0FBQTtBQStDRixNQUFNLENBQUMsTUFBTSxpQkFBaUIsR0FBRyxDQWNoQyxPQUFVLEVBQ1YsV0FBZ0IsRUFDZixFQUFFLENBQUMsZUFBZSxDQUFjLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQSJ9